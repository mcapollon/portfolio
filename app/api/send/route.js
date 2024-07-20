import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
    const res = await request.json()
    console.log('WEVE MADE IT TO THE FUNCTION', res.firstName)

    const firstName = res.firstName
    const lastName = res.lastName
    const company = res.company
    const email = res.email
    const phoneNumber = res.phoneNumber
    const message = res.message
    
    try {
        const { data, error } = await resend.emails.send({
            from: `Contact Form - <form@mckinsleyapollon.com>`,
            to: ['mckinsleyapollon@hotmail.com'],
            subject: 'Contact Form Submission - Mckinsley Apollon',
            react: EmailTemplate({ firstName, lastName, company, email, phoneNumber, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }

    return Response.json(res)
}
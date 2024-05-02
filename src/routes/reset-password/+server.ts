import { RESEND_KEY } from '$env/static/private';
import { PUBLIC_URL } from '$env/static/public';
import { prisma } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';
import crypto from 'crypto';
import { Resend } from 'resend';

async function createPasswordResetToken(userId: string, email: string): Promise<string> {
	const token = crypto.randomBytes(20).toString('hex');
	const expirationDate = new Date();
	expirationDate.setHours(expirationDate.getHours() + 1); // Token expires in 1 hour

	await prisma.user.update({
		where: {
			email: email
		},
		data: {
			resetPasswordToken: token,
			resetPasswordExpires: expirationDate.toISOString()
		}
	});

	return token;
}

export async function POST({ request }) {
	console.log('POST /reset-password');
	const { email } = await request.json();
	console.log('email:', email);

	const user = await prisma.user.findUnique({
		where: {
			email: email
		}
	});

	if (!user) {
		return json({ status: 400, message: 'Email not found' });
	}

	const token = await createPasswordResetToken(user.id, email);
	const resend = new Resend(RESEND_KEY);

	resend.emails.send({
		from: 'hunter@airmailer.io',
		to: email,
		subject: 'Reset Password - AirMailer.io 📪',
		html: `
      <div style="font-family: Arial, sans-serif; color: #333333; text-align: center; padding: 20px;">
        <h1 style="color: #333333;">Reset Your Password</h1>
        <p style="margin: 20px 0;">You've requested to reset your password. Please click the button below to proceed.</p>
        <a href="${PUBLIC_URL}/reset-password/${token}" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-decoration: none; display: inline-block; border-radius: 5px;">Reset Password</a>
        <p style="margin-top: 30px; font-size: 0.9em; color: #777;">If you didn't request a password reset, please ignore this email.</p>
      </div>
    `
	});

	return json({ status: 200, message: 'Password reset email sent' });
}

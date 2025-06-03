import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message from your portfolio website contact form.
          </Text>
          
          <Hr style={hr} />
          
          <Section style={details}>
            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>
            
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
            
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          
          <Hr style={hr} />
          
          <Text style={footer}>
            This email was sent from your portfolio website contact form.
            <br />
            <Link href="https://portfolio-atish-57s-projects.vercel.app/" style={link}>
              Visit Website
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '16px 0',
};

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const details = {
  backgroundColor: '#f8fafc',
  padding: '24px',
  borderRadius: '8px',
};

const label = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  margin: '8px 0 4px',
};

const value = {
  color: '#525f7f',
  fontSize: '16px',
  margin: '0 0 16px',
};

const messageText = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap',
};

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '16px 0',
};

const link = {
  color: '#556cd6',
  textDecoration: 'underline',
};

export default EmailTemplate;

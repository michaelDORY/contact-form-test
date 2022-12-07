import Head from 'next/head';
import { Container } from '../components/Container/styles';
import ContactForm from '../components/pages/Contact/ContactForm';
import MapsSection from '../components/pages/Contact/MapsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact Form Test</title>
        <meta name="description" content="Contact Form Test" />
      </Head>
      <section>
        <Container>
          <MapsSection />
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

import Layout from '@/components/layout';
import MainWrapper from '@/components/containers/main-wrapper/main-wrapper';

export default function About() {
  return (
    <Layout title="About">
      <MainWrapper className="about-template">
        <h3>Hello,</h3>
        <p>My name is Vasco Rebolo, I&apos;m a photographer from Braga.</p>
      </MainWrapper>
    </Layout>
  )
}

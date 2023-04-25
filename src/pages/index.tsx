// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { galleries } from './gallery/galleries'
import SListOfGalleries from '@/components/list';
import CenteredContainer from '@/components/containers/centered';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const renderLinks = () => {
    return galleries.map(gallery => (
      <li key={gallery.id} className={`${gallery.isNew ? 'new' : ''} special` }>
        <a href={`/gallery/${gallery.id}`}>{ gallery.title }</a>
      </li>
    ))
  }

  return (
    <Layout>
      <CenteredContainer>
        <SListOfGalleries>
          { renderLinks() }
          <li className="last">
            <a href="/about">About</a>
          </li>
        </SListOfGalleries>
      </CenteredContainer>
    </Layout>
  )
}

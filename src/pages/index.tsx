// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import { galleries } from '@/data/galleries'
import SListOfGalleries from '@/components/list';
import CenteredContainer from '@/components/containers/centered';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const renderLinks = () => {
    return galleries.map(gallery => (
      <li
        key={gallery.id}
        className={`${gallery.isNew ? 'new' : ''} ${gallery.isSpecial ? 'special' : ''}` }
      >
        <Link href={`/gallery/${gallery.id}`}>{ gallery.title }</Link>
      </li>
    ))
  }

  return (
    <Layout>
      <CenteredContainer>
        <SListOfGalleries>
          { renderLinks() }
          <li className="last special">
            <Link href="/about">About</Link>
          </li>
        </SListOfGalleries>
      </CenteredContainer>
    </Layout>
  )
}

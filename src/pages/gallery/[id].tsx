import { GetStaticPropsContext } from 'next';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import SGallery from './gallery.styles';
import { galleries } from '../../data/galleries';
import MainWrapper from '@/components/containers/main-wrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GalleryInfo {
  id: string;
  title: string;
  description: string;
}

interface Image {
  name: string;
  path: string;
}

interface GalleryProps {
  images: Image[];
  galleryInfo: GalleryInfo | undefined;
}

function Gallery({ images, galleryInfo }: GalleryProps) {
  const router = useRouter();
  const { query: { id }} = router;
  const galleryTitle = (id as string).replaceAll('_', ' ');
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const nrOfPhotos = images.length;

  // useEffect(() => {
  //   window.addEventListener('scrollend', handleScrollEnd);

  //   return () => {
  //     window.removeEventListener('scrollend', handleScrollEnd);
  //   };
  // }, []);


  useEffect(() => {
    const elem = document.getElementById(`photo-${currentPhoto}`);

    window?.scrollTo({top: elem?.offsetTop, behavior: 'smooth'});
  }, [currentPhoto]);

  if (router.isFallback) {
    return <div>loading...</div>
  }

  // const handleScrollEnd = () => {
  //   console.log(window.scrollY);
  // };

  const handleGalleryNav = (down: boolean) => {
    if (down && currentPhoto < nrOfPhotos) {
      setCurrentPhoto(currentPhoto + 1);
    } else if (!down && currentPhoto > 1) {
      setCurrentPhoto(currentPhoto - 1);
    }
  };


  return (
    <Layout title={galleryInfo?.title ?? galleryTitle}>
      <SGallery>
        <div className="gallery-buttons">
          <button
            onClick={() => { handleGalleryNav(false)}}
            disabled={currentPhoto === 1}
          >
            ▲
          </button>
          <button
            onClick={() => { handleGalleryNav(true)}}
            disabled={currentPhoto === nrOfPhotos}
          >
            ▼
          </button>
        </div>
        <div className="gallery-photos" id="gallery-scroll">
          <div className="image-wrapper" id="photo-1">
            <MainWrapper className="gallery-description">
              <p>{galleryInfo?.description}</p>
            </MainWrapper>
          </div>
          {images.map((image, index) => (
            <div
              className="image-wrapper"
              key={index}
              id={`photo-${index + 2}`}
            >
              <Image
                src={image.path}
                alt={image.name}
                width={1000}
                height={1000}
                style={{ position: 'sticky', top: '20vh'}}
              />
            </div>
          ))}
        </div>
      </SGallery>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = galleries.map(gallery => {
    return { params: { ...gallery }};
  })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<{ props: GalleryProps }> {
  const { id } = context.params!;
  const imageDirectory = path.join(process.cwd(), `public/photos/${id}`);
  const imageFiles = fs.readdirSync(imageDirectory);
  const galleryInfo: GalleryInfo | undefined = galleries.find(gallery => gallery.id === id);

  const images: Image[] = imageFiles.map((file) => ({
    name: file,
    path: `/photos/${id}/${file}`,
    info: galleryInfo,
  }));


  return {
    props: {
      images,
      galleryInfo,
    },
  };
}

export default Gallery;
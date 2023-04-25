import { GetStaticPropsContext } from 'next';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import SGallery from './gallery.styles';
import { galleries } from './galleries';
import MainWrapper from '@/components/containers/main-wrapper';

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

  if (router.isFallback) {
    return <div>loading...</div>
  }
  return (
    <Layout title={galleryInfo?.title ?? galleryTitle}>
      <SGallery>
        <div className="gallery-photos">
          <MainWrapper>
            <p>{galleryInfo?.description}</p>
          </MainWrapper>
          {images.map((image, index) => (
            <img key={index} src={image.path} alt={image.name} width={1000} height={1000} style={{ position: 'sticky', top: '54px'}} />
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
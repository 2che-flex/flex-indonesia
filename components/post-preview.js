import Avatar from '../components/avatar'
import Date from '../components/date'
import Youtube from '../components/youtube-video'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  video
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      <video
        src="https://drive.google.com/file/d/1xBv6PMm_B79_t3Supl83fWAZrcYMTf5z/view?usp=sharing"
        autoPlay="autoplay"
        loop="loop"
        muted={true}
        webkit-playsinline="true"
        playsInline={true}
      />
      <Youtube videoUrl={video} />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts, getPostBySlug, getAllSlugs } from '@/data/blog-posts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: 'Article introuvable | Barber Industries' }
  }
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      locale: 'fr_FR',
      type: 'article',
    },
  }
}

export default function BlogArticlePage({ params }: Props) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
      <article className="relative pt-28 pb-16 bg-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent-rose/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-blue/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent-rose transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <header className="max-w-3xl mb-10">
            <span className="inline-block px-3 py-1 bg-accent-rose/20 text-accent-rose text-xs font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-blue to-accent-rose flex items-center justify-center text-white text-xs font-semibold">
                  R
                </span>
                {post.author}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} de lecture
              </span>
            </div>
          </header>

          <div className="relative aspect-[21/9] max-w-4xl rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </div>

          <div className="max-w-3xl">
            {post.sections.map((section, i) => (
              <div key={i} className="mb-10 last:mb-0">
                {section.heading && (
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-white/70 text-base sm:text-lg mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      <section className="section-padding bg-dark-light border-t border-white/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white mb-8">À lire aussi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group card-premium overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <span className="text-accent-rose text-xs font-medium mb-2">{p.category}</span>
                  <h3 className="text-white font-semibold group-hover:text-accent-rose transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark text-center">
  <a
    href="https://www.fresha.com/book-now/barber-industries-hesy9oxq/services?lid=2945837&share=true&pId=2847783"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary inline-flex"
  >
    Réserver maintenant
  </a>
</section>
    </>
  )
}

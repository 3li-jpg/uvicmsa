import { ArrowUpRight, Camera } from 'lucide-react'
import { externalLinks } from '../../content/site'
import { getLatestInstagramPosts } from '../../lib/instagram'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

function trimCaption(text: string) {
  return text.length > 120 ? `${text.slice(0, 117).trim()}…` : text
}

export async function InstagramSection() {
  const posts = await getLatestInstagramPosts()

  return (
    <section className="py-24 sm:py-28" id="instagram">
      <Container>
        <SectionHeading
          eyebrow="Instagram"
          title="Latest posts from @uvicmsa"
          description="Recent updates from the UVic MSA Instagram account."
        />

        {posts.length > 0 ? (
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <a href={post.link} key={post.id} rel="noreferrer" target="_blank">
                <Card className="group h-full overflow-hidden p-3 hover:-translate-y-1 hover:bg-white/72 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img
                      alt={trimCaption(post.caption)}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      src={post.imageUrl}
                    />
                  </div>
                  <div className="p-3 pb-2 pt-5 sm:px-4">
                    <p className="line-clamp-3 text-sm leading-7 text-body/80 dark:text-ivory/90">{trimCaption(post.caption)}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors duration-300 group-hover:text-forest dark:text-ivory/95 dark:group-hover:text-ivory">
                      View post
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        ) : (
          <Card className="mt-12 p-6 dark:border-white/10 dark:bg-white/[0.06] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-ivory shadow-soft">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.05em] text-deep dark:text-ivory">Follow @uvicmsa</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-body/80 dark:text-ivory/90">
                  The latest posts could not be loaded automatically right now, but the Instagram page is linked below.
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-deep transition-colors duration-300 hover:text-forest dark:text-ivory/95 dark:hover:text-ivory"
                  href={externalLinks.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open Instagram
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        )}
      </Container>
    </section>
  )
}



export async function generateMetadata(){
    // read route params
    // const id = params.id
   
    // fetch data
    const product = await fetch(`https://cnp2002-api.developer24x7.com/api/frontend/video/getVideoById/6`).then((res) => res.json())
     console.log(product)
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.data.title,
      description: product.data.description,
      openGraph: {
        images: product.data.thumbnail_link,
      },
      twitter: {
        card: 'summary_large_image',
        title: product.data.title,
        description: product.data.description,
        siteId: '1467726470533754880',
        creator: '@nextjs',
        creatorId: '1467726470533754880',
        images: {
            url: product.data.thumbnail_link,
            alt: 'Next.js Logo',
          },// Must be an absolute URL
        // player:product.data.teaser_link,
        // playerWidth: '640',
        // playerHeight: '360',
      }
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
    }
  }

export default async function LawfirmAccountSettingsLayout({ children }) {
  return (
    <div className="right-container lg:!flex-[0_0_calc(100vw-21.5625rem)] lg:max-w-[calc(100vw-21.5625rem)] !pb-0 min-h-[100vh] w-full">
      <div className="flex items-center min-h-12 mb-6">
        <h2 className="c-page-title !mb-0">Account Settings</h2>
      </div>
      <div className="m-card">
        {children}
      </div>
    </div>
  );
}
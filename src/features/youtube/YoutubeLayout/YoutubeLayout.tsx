interface YoutubeLayoutProps {
  url: string;
}

function YoutubeLayout({ url }: YoutubeLayoutProps) {
  return <div>{url}</div>;
}

export default YoutubeLayout;

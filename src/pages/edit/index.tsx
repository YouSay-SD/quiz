export default function Index() {
  return <div />
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `/`,
      permanent: false,
    },
  }
}

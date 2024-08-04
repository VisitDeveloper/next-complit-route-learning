import { Metadata } from 'next';



type ProductIDProps = {
  params: {
    productID: string;
  }
}

export const generateMetadata = async ({ params }: ProductIDProps): Promise<Metadata> => { // generateMetadata دقیقا باید به همین شکل باشه 
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productID}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}




export default function ProductID(props: ProductIDProps) {
  return (
    <div>Products ID {props.params.productID} </div>
  )
}

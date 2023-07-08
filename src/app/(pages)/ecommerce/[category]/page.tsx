export default function MainContent({params:{category}}:{params:{category:string}}) {
    console.log({category})
  return (
    <div>We are in {category}</div>
  )
}

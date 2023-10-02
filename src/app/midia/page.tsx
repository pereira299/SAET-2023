import Gallery from "@/components/Gallery";
import Label from "@/components/Label"
import api from "@/services/api"

const Midia = async () => {
    const res = await api.get('/api/midia');
    const images = res.data.allUploads.map((img: {url: string, height: number, width: number}) => {
        return {
            src: img.url,
            height: img.height,
            width: img.width,
        }
    })
    
    return (
        <main className="flex flex-col items-center mt-20">
            <Label text="Mídia" />
            <Gallery images={images}/>
        </main>
    )
}

export default Midia
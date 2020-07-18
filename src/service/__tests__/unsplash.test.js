import unsplash from '../../service/unsplash'
import mockAxios from "../../__mock__/axios"

it('calls axios and returns images',async ()=>{
    mockAxios.get.mockImplementationOnce(()=>{
        Promise.resolve({
            data:{
                results:["cute.jpg"]
            }
        })
    })
    const images=await unsplash.searchImageApi("kittens");
    expect(images).toEqual(["cute.jpg"])
    console.log(images)
})
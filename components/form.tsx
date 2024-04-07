"use client"


import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
// import axios from 'axios';
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UploadResponse } from '@/lib/types';
import { useRouter } from "next/navigation";
import { AppWindowIcon } from 'lucide-react';

export default function Form() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [imageNumber, setImageNumber] = useState<number>(0);
  const [audios, setAudios] = useState<string[]>([ ""]);
  
  const audiosObject = {
    "Image 1": "https://replicate.delivery/pbxt/ikzeN35uwz2iOC7KUBWlG3C5qhC2YodfybRsg5oIZbXH24nSA/out.mp3",
    "Image 2": "https://replicate.delivery/pbxt/cMEZUQPkGJphNJDXPxZ4Ou3RyaIIeDZN8mnxKe7nlfouelfUC/out.mp3",
    "Image 3": "https://replicate.delivery/pbxt/ZMfTCayEjjWRfkkuk5UJDVCHYgV9nrqfL2w74dciYL8GHzPlA/out.mp3",
    "Image 4": "https://replicate.delivery/pbxt/0idOKHnVB1ajLRwnDSk5iPIDfY8IL9L92WImqlx5ntT9f5nSA/out.mp3",
    "Image 5": "https://replicate.delivery/pbxt/kkPhc6Byyq6nMF3ZI1TmBPCajj3yVvvP3cVP21D4pMDxieTJA/out.mp3"
  }
  
  const [status, setStatus] = useState<string | null>(null);
  const router = useRouter();

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedFile(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const file = e.target.files?.[0];

  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('image', file);

  //     try {
  //       const response = await fetch('/api/upload', {
  //         method: 'POST',
  //         body: formData
  //       });

  //       if (response.ok) {
  //         const data: UploadResponse = await response.json(); 
  //         const url = data.url; 

  //         // Do something with the CDN URL (e.g., display uploaded image, store in MongoDB)
  //         console.log('Image uploaded:', url); 
  //       } else {
  //         console.error('Upload failed');
  //       }
  //     } catch (err) {
  //       console.error("Error uploading:", err); 
  //     }
  //   }
  // }
  return (
    <div className="grid w-full items-center justify-center gap-1.5 text-[#000]">
      {/* <Label htmlFor="picture">Picture</Label> */}
          <CldUploadWidget onSuccess={(results) => {
            // @ts-ignore
            console.log(results);

            setStatus("Generating...");
            setTimeout(() => {
              // @ts-ignore
              window.open(audiosObject[results.info.original_filename!], "_blank");

              setStatus(null);
            }, 15000)
          }} uploadPreset="j0vpazql">{({ open }) => {
            return (
              <>
                <button disabled={status !== null} className="button text-sm rounded-lg px-4 py-2 bg-white text-black font-semibold" onClick={() => open()}>
                  Upload
                </button>
                <p className="text-white font-semibold">{status}</p>
              </>
            );
          }}</CldUploadWidget>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Violin">Violin</SelectItem>
          <SelectItem value="Electric guitar">Electric guitar</SelectItem>
          <SelectItem value="Bagpipes">Bagpipes</SelectItem>
          <SelectItem value="Piano">Piano</SelectItem>
          <SelectItem value="Harp">Harp</SelectItem>

        </SelectContent>
      </Select>
    </div>
  );
}

// const Form = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = async (event: any) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);
    
//     try {
//       //const response = await axios.post('/api/enhance-image', formData);
//       // Handle the enhanced image response here
//       //console.log('Enhanced image:', response.data);
//       // Update state or display the enhanced image
//     } catch (error) {
//       console.error('Error enhancing image:', error);
//     }
//   };

//   return (
//     <div>
//       <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Theme" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="light">Light</SelectItem>
//         <SelectItem value="dark">Dark</SelectItem>
//         <SelectItem value="system">System</SelectItem>
//       </SelectContent>
//     </Select>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//     </div>
//   );
// };

//export default Form;










// "use client"
 
// import Link from "next/link"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
 
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { toast } from "@/components/ui/use-toast"
 
// const FormSchema = z.object({
//   email: z
//     .string({
//       required_error: "Please select an email to display.",
//     })
//     .email(),
// })
 
// export function SelectForm() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   })
 
//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }
 
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent>
//                   <SelectItem value="m@example.com">m@example.com</SelectItem>
//                   <SelectItem value="m@google.com">m@google.com</SelectItem>
//                   <SelectItem value="m@support.com">m@support.com</SelectItem>
//                 </SelectContent>
//               </Select>
//               <FormDescription>
//                 You can manage email addresses in your{" "}
//                 <Link href="/examples/forms">email settings</Link>.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }
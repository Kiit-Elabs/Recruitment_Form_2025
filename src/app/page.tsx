"use client"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import formSchema from "@/schemas/formSchema";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from '@/hooks/use-toast'
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation"
import { SparklesPreview } from "@/components/SparklesPreview";


const Page = ({ }) => {

  const [loader, setLoader] = useState<boolean>(false)

  // If you do not make this component  as client component then it will give you a error as userForm is not a function.

  // I also figured out  that if we explicitely create the data type or the already created Candidate type can also be used with it because we only have to give the schema or type of the data which is coming or which i am getting.

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      domain: "Select Domain",
      kiitemail: "",
      email: "",
      roll: "",
      gender: "Select Gender",
      contactNumber: "",
      yearOfStudy: "Select Year",
      branch: "",
      links: {
        resume: "",
        github: "",
        linkedin: ""
      },
      existSocieties: "",
      whyElabs: "",
      fromWhereYouGotKnow: "",
      anythingElse: "",
      present: false,
      interviewed: false,
      interviewedBy: "",
      isinterviewRunning: false,
      selected: false,
      selectedBy: "",
      message: ""
    },
  });

  const { toast } = useToast();

  const handleFormSubmission = async (data: z.infer<typeof formSchema>) => {
    setLoader(true);
    const response = await axios.post("/api/addCandidate", data);
    if (response) {
      toast({
        title: "Form is Submitted",
        description: "Your form is Submitted Successfully"
      });
      setLoader((prev)=>(prev=false));
      redirect("/completed")

    }
    else {
      toast({
        title: "Form is not Submitted",
        description: "Your form is not Submitted try again !",
        variant: "destructive"
      })
    }
  }


  return (
    <div className="w-full text-lg text-black outline-black min-h-screen pt-4 flex  flex-col items-center justify-center py-4">
      <div className="">
        <SparklesPreview />

      </div>


      <div className=" w-full md:w-1/2 px-8 md:px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmission)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white ">Enter Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" className="text-black outline-none text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roll"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Roll</FormLabel>
                  <FormControl>
                    <Input placeholder="Roll Number" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kiitemail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter KIIT Email</FormLabel>
                  <FormControl>
                    <Input placeholder="KIIT Email" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Personal Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Personal Email" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Contact Number" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Select Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Select Domain</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Domain" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="webdevelopment">Web Development</SelectItem>
                      <SelectItem value="appdevelopment">Android Development</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="graphicdesigning">Graphic Designing</SelectItem>
                      <SelectItem value="uiux">UI/UX</SelectItem>
                      <SelectItem value="iot">IOT & Embedded</SelectItem>
                      <SelectItem value="gamedevelopment">Game Development & AR/VR</SelectItem>
                      <SelectItem value="photography">Photography & Video Editing</SelectItem>
                      <SelectItem value="marketing">Marketing & PR</SelectItem>
                      <SelectItem value="aiml">AI/ML</SelectItem>
                      <SelectItem value="cybersecurity">Cyber Security </SelectItem>
                      <SelectItem value="cloud">Cloud</SelectItem>
                      <SelectItem value="dataanalytics">Data Analytics</SelectItem>
                      <SelectItem value="contentwriting">Content Writing</SelectItem>

                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yearOfStudy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Select Your Current Year</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1st">1st</SelectItem>
                      <SelectItem value="2nd">2nd</SelectItem>
                      <SelectItem value="3rd">3rd</SelectItem>

                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Branch Name </FormLabel>
                  <FormControl>
                    <Input placeholder="Computer Science Engineering" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="links.resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Your Resume <b>Link</b> </FormLabel>
                  <FormControl>
                    <Input placeholder="Resume Link" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="links.github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Your Github <b>Link</b> </FormLabel>
                  <FormControl>
                    <Input placeholder="Github Link" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="links.linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Enter Your Linkedin <b>Link</b> </FormLabel>
                  <FormControl>
                    <Input placeholder="Linkedin Link" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="existSocieties"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Existing Society</FormLabel>
                  <FormControl>
                    <Input placeholder="Existing Society" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whyElabs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Why Elabs</FormLabel>
                  <FormControl>
                    <Input placeholder="Some Good Points of Elabs" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fromWhereYouGotKnow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">From Where you got to Know</FormLabel>
                  <FormControl>
                    <Input placeholder="Referal" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="anythingElse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Anything Else</FormLabel>
                  <FormControl>
                    <Input placeholder="Something about yourself rather than present in resume" className="text-black text-sm" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-orange-500 w-full hover:bg-orange-800 h-10">{(loader) ? <Loader2 /> : null}Submit</Button>
          </form>
        </Form>

      </div>

    </div>
  )
}

export default Page;



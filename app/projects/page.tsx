
import Image from "next/image";
import { client } from "../lib/sanity";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";
import { GiBroadheadArrow } from "react-icons/gi";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}
interface Datasm {
  title: string;
  overview: string;
  link: string;
  _id: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

async function getSmallProjects() {
  const query = `*[_type == "smallproject"]  {
    title,
      overview,
      link,
      _id,
  }`;
  const datasm = await client.fetch(query);

  return datasm;
}
export const revalidate = 60;

export default async function ProjectsPage() {
  const data: Data[] = await getProjects();
  const datasm: Datasm[] = await getSmallProjects();
  return (
    <div className="w-full  mx-auto bg-[#282C33]">
      <h1 className="flex justify-start ml-0 md:ml-28 items-center  text-2xl font-bold text-[#FFF]">
        <span className="text-[#C778DD]">/</span>projects 
      </h1>
      <p className="text-[#cac9c9] ml-0 md:ml-28">List of my projects</p>

      <div className="mt-20">
        <h1 className="flex justify-start ml-0 md:ml-28 items-center  text-2xl font-bold text-[#FFF]">
          <span className="text-[#C778DD]">#</span>Complete-apps<GiBroadheadArrow/>
        </h1>
      </div>

      <div className="">
        <div className="w-full max-w-7xl mx-auto bg-[#282C33]  lg:my-0">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-3 lg:gap-10 pt-8">
            {data.map((project) => (
              <div
                key={project._id}
                className="overflow-hidden rounded-3xl shadow-lg border border-[#7d7c7c] bg-[#282C33] shadow-[#7d7c7c] "
              >
                <div className="w-full h-53 border border-[#7d7c7c]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <Link href={project.link} target="_blank">
                    <h3 className="text-2xl font-bold text-[#FFF] hover:text-[#C778DD]">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="border border-[#7d7c7c] p-3  line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.overview}
                  </p>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                  >
                    <button className="btn btn-outline font-bold text-[18px] border-[#C778DD] bg-[#282C33] text-[#FFF] hover:bg-[#C778DD]">
                      Live{" "}
                      <span className="flex justify-center items-center ml-2">
                        <TiArrowRightThick /> <TiArrowLeftThick />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-40">
        <div className="mt-32">
          <h1 className="flex justify-start  ml-0 md:ml-28 items-center  text-2xl font-bold text-[#FFF]">
            <span className="text-[#C778DD]">#</span>small-projects <GiBroadheadArrow/>
          </h1>
        </div>
        <div className="w-full max-w-7xl mx-auto bg-[#282C33]  lg:my-0">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-3 lg:gap-10 pt-8">
            {datasm.map((project) => (
              <div
                key={project._id}
                className="overflow-hidden rounded-3xl shadow-lg border border-[#7d7c7c] bg-[#282C33] shadow-[#7d7c7c] "
              >
                  <div className="p-4 sm:p-6">
                  <Link href={project.link} target="_blank">
                    <h3 className="text-2xl font-bold text-[#FFF] hover:text-[#C778DD]">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="border border-[#7d7c7c] p-3  line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.overview}
                  </p>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                  >
                    <button className="btn btn-outline font-bold text-[18px] border-[#C778DD] bg-[#282C33] text-[#FFF] hover:bg-[#C778DD]">
                      Github{" "}
                      <span className="flex justify-center items-center ml-2">
                        <TiArrowRightThick /> <TiArrowLeftThick />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

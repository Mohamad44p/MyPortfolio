import Link from "next/link";
import { TiArrowRightThick  , TiArrowLeftThick} from "react-icons/ti";
import { client } from "../lib/sanity";
import Image from "next/image";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] [0...3] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectsHero() {
  const data: Data[] = await getProjects();
  return (
    <div className="w-full max-w-7xl h-[100vh] mx-auto bg-[#282C33] divide-y divide-gray-700 mb-[60rem] lg:my-0">
      <div className="flex justify-between items-center mx-auto max-w-7xl space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="flex justify-center items-center gap-4 text-2xl font-bold leading-9 tracking-tight text-[#FFF]">
          <div className="flex justify-start items-center">
            <span className="text-[#C778DD]">#</span> projects{" "}
          </div>
          <div className="border border-[#9157a1] md:w-[40rem] w-[4rem]"></div>
        </h1>
        <div className="pb-5">
          <Link href="/projects">
            <h1 className="flex justify-center items-center gap-4 text-2xl font-bold text-[#FFF]">
              View all <TiArrowRightThick />{" "}
            </h1>
          </Link>
        </div>
      </div>

      <div className="grid  gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-3 lg:gap-10 pt-8">
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
                <h3 className="text-2xl font-bold text-[#FFF] hover:text-[#C778DD]">{project.title}</h3>
              </Link>

              <p className="border border-[#7d7c7c] p-3  line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <Link href={project.link} target="_blank" className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  <button className="btn btn-outline font-bold text-[18px] border-[#C778DD] bg-[#282C33] text-[#FFF] hover:bg-[#C778DD]">
                    Live <span className="flex justify-center items-center ml-2"><TiArrowRightThick/> <TiArrowLeftThick/></span>
                  </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

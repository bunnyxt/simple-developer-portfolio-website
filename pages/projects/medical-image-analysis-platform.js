import React from "react";
import ContainerBlock from "../../components/ContainerBlock";

export default function MedicalImageAnalysisPlatform() {
  return (
    <ContainerBlock title="Medical Image Analysis Platform - Jinyuan Liu a.k.a bunnyxt">
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
          <h1 className="text-5xl md:text-7xl font-bold py-20 text-center md:text-left">
            Medical Image Analysis Platform
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto p-5">
            <div className="my-10 pl-4 border-l-4 border-gray-400 bg-gray-50 dark:bg-gray-700 p-4 italic">
              <p className="mb-4 font-semibold text-gray-700 dark:text-gray-300">
                📚 This work has been patented in the United States and
                published:
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong>Masatomo Kaneko</strong>, Vasileios Magoulianitis,
                Lorenzo Storino Ramacciotti, Alex Raman, Divyangi Paralkar,
                Andrew Chen, Timothy N. Chu, Yijing Yang, Jintang Xue, Jiaxin
                Yang, <strong>Jinyuan Liu</strong>, Donya S. Jadvar, Karanvir
                Gill, Giovanni E. Cacciamani, Chrysostomos L. Nikias, Vinay
                Duddalwar, C.-C. Jay Kuo, Inderbir S. Gill, Andre Luis Abreu,{" "}
                <em>
                  "The Novel Green Learning Artificial Intelligence for Prostate
                  Cancer Imaging: A Balanced Alternative to Deep Learning and
                  Radiomics"
                </em>
                , Urologic Clinics of North America, Volume 51, Issue 1, 2024,
                Pages 1-13.{" "}
                <a
                  href="https://doi.org/10.1016/j.ucl.2023.08.001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  DOI: 10.1016/j.ucl.2023.08.001
                </a>
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold py-20 text-center md:text-left">
              Introduction
            </h2>
            <p className="mb-5">
              The Medical Image Analysis Platform is my project when I worked at
              USC Media Communication Lab. Briefly speaking, this is a{" "}
              <b>
                web-based user-friendly interface to access AI models for
                medical researchers without coding experience
              </b>
              .
            </p>
            <p className="mb-5">
              Cooperated with professional medical researchers from the Keck
              School of Medicine of USC, our team trained AI models that could
              recognize the prostate area on the CT scan DICOM series image
              slices. Medical researchers could use the AI-annotated masks as a
              reference, just make some slight modifications, then finish the
              annotation process, instead of annotating by themselves from
              scratch.
            </p>
            <p className="mb-5">
              As a web developer, I'm totally in charge of the web system. I
              implemented the RESTFul backend server using Python <b>Flask</b>{" "}
              framework, and bulit the frontend interface via <b>React</b>,{" "}
              <b>JavaScript</b>, <b>SCSS</b>, etc.
            </p>
            <p className="mb-5">
              One of the proudest parts of the project is that, I created a
              professional image series annotation tool enabling medical
              researchers to circle regions of interest on 2D slices and view
              the entire 3D stacked CT scan modeled from 2D slices in a
              interactive viewer using <b>Fabric.js</b> and <b>Three.js</b>.
            </p>
            <p className="mb-5">
              Due to data privacy and model security limitations, this platform
              is deployed on the lab intranet, and the source code cannot be
              published on the public network. Here are some snapshots and demo
              gifs of the platform.
            </p>
            <h2 className="text-3xl md:text-5xl font-bold py-20 text-center md:text-left">
              Demos
            </h2>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/series-list.png"
                alt="medical-image-analysis-platform_series-list"
              />
              <p className="text-center mt-5">
                The series list with image slices preview.
              </p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/upload-panel.png"
                alt="medical-image-analysis-platform_upload-panel"
              />
              <p className="text-center mt-5">
                The series upload drawer, supports drag-and-drop uploading.
              </p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/series-detail.png"
                alt="medical-image-analysis-platform_series-detail"
              />
              <p className="text-center mt-5">The series detail viewer page.</p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/mask-editor.png"
                alt="medical-image-analysis-platform_mask-editor"
              />
              <p className="text-center mt-5">
                The mask editor, based on Fabric.js. Users are allowed to make
                adjustments based on the AI-annotated mask.
              </p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/3d-viewer.png"
                alt="medical-image-analysis-platform_3d-viewer"
              />
              <p className="text-center mt-5">
                The 3D viewer, based on Three.js. Users can preview the entire
                3D stacked CT scan annotated area. This would be a great help
                for medical researchers to annotate more accurately.
              </p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/3d-viewer-mask-opacity-swap.gif"
                alt="medical-image-analysis-platform_3d-viewer-mask-opacity-swap"
              />
              <p className="text-center mt-5">
                Change opacity of mask area. The green region is generated by
                AI, while the blue region is manually modified. You can see the
                mis-annotated bumps have been removed.
              </p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/3d-viewer-slice-skip.gif"
                alt="medical-image-analysis-platform_3d-viewer-slice-skip"
              />
              <p className="text-center mt-5">
                Skip some slices to disassemble the cube.
              </p>
            </div>
            <div className="mb-10">
              <img
                className="mx-auto shadow-xl"
                src="/medical-image-analysis-platform/3d-viewer-slice-section.gif"
                alt="medical-image-analysis-platform_3d-viewer-slice-section"
              />
              <p className="text-center mt-5">
                Preset slice view, then change skip slices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}

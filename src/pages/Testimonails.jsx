import React from "react";

const Testimonails = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-36 md:py-24  "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-4">
        <div className="mx-auto max-w-2xl text-center items-center">
          <h2 className="font-display text-3xl tracking-tight head-text text-slate-900 sm:text-4xl">
            Voices of{" "}
            <span className="blue-gradient_text drop-shadow font-semibold">
              Experience
            </span>
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      I had the pleasure of working closely with Sidramaraddy
                      during his tenure as a full stack software engineer on my
                      team. I can confidently say that he is an exceptional
                      talent. He is a highly skilled and dedicated professional
                      who consistently delivered high-quality work on various
                      complex projects. I have no doubt that Sidramaraddy will
                      continue to thrive and excel in any future endeavors, and
                      I wholeheartedly recommend him for any software
                      engineering role.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display flex items-center font-bold text-slate-900">
                        <div>
                        Suyodh Kittur 
                        </div>
                        <div style={{marginLeft:"5px"}}>
                        <a target="_blank" href="https://www.linkedin.com/in/suyodh-kittur/" > <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkdin" style={{width:"18px"}} /></a>
                        </div>
                      </div>
                      <div className="text-sm mt-1">
                        Co-founder & VP of Engineering
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: "transparent" }}
                        src="https://media.licdn.com/dms/image/D4D03AQGNtAawNzeotw/profile-displayphoto-shrink_800_800/0/1687835330164?e=1715817600&v=beta&t=4PluRDawOcT9aU55zjrHQA0zIvZtZuTtP7NJsINUjgw"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      Throughout our academic journey, I had the privilege of
                      witnessing Sidramaraddy's remarkable dedication and
                      impressive skills in the field. His passion for computer
                      science was evident in his consistent pursuit of knowledge
                      and his ability to tackle complex concepts with ease.
                      Sidramaraddy actively engaged in classroom discussions,
                      frequently offering insightful contributions that enhanced
                      our learning experience.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display flex items-center font-bold text-slate-900">
                        <div>
                        Ambarish Bhagawati{" "}

                        </div>
                        <div style={{marginLeft:"5px"}}>
                        <a target="_blank" href="https://www.linkedin.com/in/ambarish-bhagawati/" > <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkdin" style={{width:"18px"}} /></a>
                        </div>
                      </div>
                      <div className="text-sm mt-1">
                        Engineer-Cloud Services and Software | Salesforce
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: "transparent" }}
                        src="https://media.licdn.com/dms/image/D4D03AQEsi5xCTlPMpA/profile-displayphoto-shrink_800_800/0/1694257386559?e=1715817600&v=beta&t=lLsN2ly7JkokgXo1HvVFsKbWUljPgWTFME7ByaDRJjM"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      I had the privilege of closely observing Sidramaraddy's
                      outstanding skills and dedication as a full stack software
                      engineer. His consistent delivery of high-quality work on
                      complex projects was truly impressive. As a QA engineer
                      and colleague, I'm confident his versatile expertise in
                      resolving customer issues and digital marketing will
                      undoubtedly lead to his success in any future role.
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display flex items-center font-bold text-slate-900">
                        <div>
                        Maning More
                        </div>
                        <div style={{marginLeft:"5px"}}>
                        <a target="_blank" href="https://www.linkedin.com/in/maning-more-a50a5223a/" > <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkdin" style={{width:"18px"}} /></a>
                        </div>
                      </div>
                      <div className="text-sm mt-1">
                        Experienced QA Engineer
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: "transparent" }}
                        src="https://media.licdn.com/dms/image/D4D35AQGn5yDtYaLptw/profile-framedphoto-shrink_800_800/0/1707846948876?e=1710871200&v=beta&t=ODQUvn2dL1rFWWuU96vt2OteH4K4io1xZmIQGzT3yxs"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <svg
                    aria-hidden="true"
                    width="105"
                    height="78"
                    className="absolute left-6 top-6 fill-slate-100"
                  >
                    <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                  </svg>
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900">
                      I would like to mention Sidramaraddy about in 3 words
                      based on what I have seen/Observed - Hardworking | Good
                      Communicator | Confident
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display flex items-center font-bold text-slate-900">
                        <div>
                        Sourabh Zutti
                        </div>
                        <div style={{marginLeft:"5px"}}>
                        <a target="_blank" href="https://www.linkedin.com/in/sourabh-zutti/" > <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkdin" style={{width:"18px"}} /></a>
                        </div>
                      </div>
                      <div className="text-sm mt-1">Driving Digital Growth</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: "transparent" }}
                        src="https://media.licdn.com/dms/image/D5603AQEcAeHT8Ivb9A/profile-displayphoto-shrink_800_800/0/1704527099091?e=1715817600&v=beta&t=qpTY_ohUUdO3iCBLGa-k-jANCSUp6wspM1Q96R2UOi0"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonails;

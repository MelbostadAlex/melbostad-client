import php from '../assets/icons/php.svg';
import laravel from '../assets/icons/laravel.png';
import node from '../assets/icons/node.png';
import react from '../assets/icons/react.png';
import vue from '../assets/icons/vue.png';
import firebase from '../assets/icons/firebase.svg';
import aws from '../assets/icons/aws.png';
import git from '../assets/icons/git.png';

const skills = [
  {
    title: 'PHP',
    imageUrl: php,
    description:
      'Very comfortable. Almost 5 years experience working for multiple companies',
  },
  {
    title: 'Laravel',
    imageUrl: laravel,
    description:
      'Extremely comfortable. Almost 5 years experience working for multiple companies',
  },
  {
    title: 'NodeJS',
    imageUrl: node,
    description:
      'Extremely comfortable. 2 years active experience working for my current company',
  },
  {
    title: 'React',
    imageUrl: react,
    description:
      'Extremely comfortable. 5 years of active experience working for multiple companies',
  },
  {
    title: 'Vue',
    imageUrl: vue,
    description:
      'Extremely comfortable. 5 years of active experience working for multiple companies',
  },
  {
    title: 'Firebase',
    imageUrl: firebase,
    description:
      'Very comfortable. 2 years of active experience working for my current company',
  },
  {
    title: 'AWS',
    imageUrl: aws,
    description:
      'Very comfortable. 5 years of experience working for multiple companies',
  },
  {
    title: 'Git & Github',
    imageUrl: git,
    description:
      'Expert level. 5 years of active experience working private and in different companies',
  },
];

const Skills = () => {
  return (
    <section className='py-16 mx-auto sm:py-20'>
      <div className='mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl'>
        <div className='flex justify-center object-center flex-col gap-12 sm:gap-16'>
          <div>
            <h1 className='hidden lg:flex md:flex flex-col roboto-black text-[64px] justify-center items-center text-black mt-[4vw] mb-[5vw]'>
              What are my skills?
            </h1>

            <h1 className='flex lg:hidden md:hidden flex-col roboto-black text-[64px] justify-center items-center text-black mt-[4vw] mb-[5vw]'>
              Skills
            </h1>
          </div>

          <div className='mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-4'>
            {skills.map((skill) => (
              <div
                key={skill.title}
                className='group h-64 w-64 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                  <div className='absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]'>
                    {skill.imageUrl && (
                      <img
                        src={skill.imageUrl}
                        alt='Logo'
                        className='p-[4vw]'></img>
                    )}
                  </div>

                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h2 className='text-2xl font-bold mb-4'>{skill.title}</h2>

                      <p className='text-lg text-pretty text-center mb-4'>
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

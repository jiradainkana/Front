import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
export default function Teams() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.reveal', {
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
      delay: 200,
      reset: true
    });
  }, []);
  return (
    <main>
        <div className="text-center my-7 reveal sm:px-4">
            <h1 className='text-5xl'>Terms and Conditions</h1>
            <p className='my-3'>Give your visitor a smooth online experience with a solid UX design</p>
        </div>
        <div className="order">
           <div className="container mx-auto reveal">
                <h2 className='text-3xl '>1.Introduction</h2>
                <p className='my-3 text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit.
                   <br /> Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. 
                    Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. 
                    <br /> Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor.
                     Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam <br /> tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                     <p  className='my-3 text-lg text-gray-600'>Massa ultricies a arcu velit eget gravida purus ultrices eget. Orci, fames eu facilisi justo. Lacus netus a at sed justo vel leo leo pellentesque. Nulla ut <br /> laoreet luctus cum turpis et amet ac viverra. Vitae neque orci dui eu ac tincidunt. Egestas placerat egestas netus nec velit gravida consectetur <br /> laoreet vitae. Velit sed enim habitant habitant non diam. Semper tellus turpis tempus ac leo tempor. Ultricies amet, habitasse adipiscing bibendum <br /> consequat amet, sed. Id convallis suspendisse vitae, lacinia mattis cursus montes, dui. Tortor lobortis dignissim eget egestas. Eget enim auctor <br /> nunc eget mattis sollicitudin senectus diam. Tincidunt morbi egestas dignissim eget id aliquam.</p>
            </div> 
        </div>
        <div className="my-5 order">
           <div className="container mx-auto reveal">
                <h2 className='text-3xl'>2.Your Use of the Sites</h2>
                <p className='my-3 text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit.
                   <br /> Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. 
                    Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. 
                    <br /> Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor.
                     Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam <br /> tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                     <p  className='my-3 text-lg text-gray-600'>Massa ultricies a arcu velit eget gravida purus ultrices eget. Orci, fames eu facilisi justo. Lacus netus a at sed justo vel leo leo pellentesque. Nulla ut <br /> laoreet luctus cum turpis et amet ac viverra. Vitae neque orci dui eu ac tincidunt. Egestas placerat egestas netus nec velit gravida consectetur <br /> laoreet vitae. Velit sed enim habitant habitant non diam. Semper tellus turpis tempus ac leo tempor. Ultricies amet, habitasse adipiscing bibendum <br /> consequat amet, sed. Id convallis suspendisse vitae, lacinia mattis cursus montes, dui. Tortor lobortis dignissim eget egestas. Eget enim auctor <br /> nunc eget mattis sollicitudin senectus diam. Tincidunt morbi egestas dignissim eget id aliquam.</p>
            </div> 
        </div>
        <div className="my-5 order reveal">
           <div className="container mx-auto">
                <h2 className='text-3xl'>3. Content and Ideas</h2>
                <p className='my-3 text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Risus nascetur morbi nisl, mi, in semper metus porttitor non. Augue nunc amet fringilla sit.
                   <br /> Fringilla eget arcu sodales sed a, parturient fermentum amet scelerisque. 
                    Amet purus urna, dictumst aliquet aliquam natoque non, morbi pretium. 
                    <br /> Integer amet fermentum nibh viverra mollis consectetur arcu, ultrices dolor.
                     Gravida purus arcu viverra eget. Aliquet tincidunt dignissim aliquam <br /> tempor nec id. Habitant suscipit sit semper duis odio amet, at.</p>
                     <p  className='my-3 text-lg text-gray-600'>Massa ultricies a arcu velit eget gravida purus ultrices eget. Orci, fames eu facilisi justo. Lacus netus a at sed justo vel leo leo pellentesque. Nulla ut <br /> laoreet luctus cum turpis et amet ac viverra. Vitae neque orci dui eu ac tincidunt. Egestas placerat egestas netus nec velit gravida consectetur <br /> laoreet vitae. Velit sed enim habitant habitant non diam. Semper tellus turpis tempus ac leo tempor. Ultricies amet, habitasse adipiscing bibendum <br /> consequat amet, sed. Id convallis suspendisse vitae, lacinia mattis cursus montes, dui. Tortor lobortis dignissim eget egestas. Eget enim auctor <br /> nunc eget mattis sollicitudin senectus diam. Tincidunt morbi egestas dignissim eget id aliquam.</p>
            </div> 
        </div>
    </main>
  )
}

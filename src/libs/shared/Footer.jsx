import { Footer } from 'flowbite-react';
import React from 'react';

const FooterOut = () => {
    return (
      <div className='container mx-auto'>
        <Footer container={true}>
          <Footer.Copyright href="#" by="Food Recipes™" year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    );
};

export default FooterOut;
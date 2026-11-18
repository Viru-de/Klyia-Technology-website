import React from 'react';
import {HOME_VISIBLE_FAQS} from '../../config/seo.ts';
import {VisibleFaqBlock} from '../shared/VisibleFaqBlock.tsx';
import {Container} from '../ui/Container.tsx';

export function HomeFaqSection() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 border-b border-[#303030]">
      <Container>
        <VisibleFaqBlock
          heading="Frequently Asked Questions About Klyia Technology"
          subtitle="Clear answers regarding our services, Bhilai headquarters, Bhilai-Durg-Raipur & India coverage, SEO/GEO/AEO, and honest scoping."
          faqs={HOME_VISIBLE_FAQS}
        />
      </Container>
    </section>
  );
}

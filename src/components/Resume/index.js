import React from 'react';
import STRINGS from '../../localization';

export const Resume = () =>
<section id="resume">
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>{STRINGS.EDUCATION}</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>{STRINGS.THE_HAGUE_UNIVERSITY}</h3>
          <p className="info">{STRINGS.BACHELOR_DEGREE}<span>•</span> <em className="date">{`${STRINGS.FEBRUARY} ${STRINGS.TWO_THOUSAND_EIGHTEEN}`}</em></p>
          <p>
            {STRINGS.BACHELOR_DESCRIPTION}
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>{STRINGS.NOVA_COLLEGE}</h3>
          <p className="info">{STRINGS.ASSOCIATES_DEGREE}<span>•</span> <em className="date">{`${STRINGS.SEPTEMBER} ${STRINGS.TWO_THOUSAND_THIRTEEN}`}</em></p>
          <p>
            {STRINGS.ASSOCIATES_DESCRIPTION}
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Work
----------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>{STRINGS.WORK}</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>{STRINGS.BLOCK_BUSKER}</h3>
          <p className="info">{STRINGS.FULL_STACK_ENGINEER}<span>•</span> <em className="date">{`${STRINGS.DECEMBER} ${STRINGS.TWO_THOUSAND_EIGHTEEN} - ${STRINGS.PRESENT}`}</em></p>
          <p>
            {`${STRINGS.BLOCK_BUSKER_DESCRIPTION} ${STRINGS.BLOCK_BUSKER_DESCRIPTION_2}`}
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>{`${STRINGS.BIT_HOLLA}`}</h3>
          <p className="info">{`${STRINGS.FULL_STACK_ENGINEER}`}<span>•</span><em className="date">{`${STRINGS.JUNE} ${STRINGS.TWO_THOHUSAND_SEVENTEEN} - ${STRINGS.AUGUST} ${STRINGS.TWO_THOUSAND_EIGHTEEN}`}</em></p>
          <p>
            {`${STRINGS.BIT_HOLLA_DESCRIPTION} ${STRINGS.BIT_HOLLA_DESCRIPTION_2}`}
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>{`${STRINGS.BLUE_SPHERE}`}</h3>
          <p className="info">{`${STRINGS.PART_TIME_DEVELOPER}`}<span>•</span><em className="date">{`${STRINGS.FEBRUARY} ${STRINGS.TWO_THOHUSAND_SEVENTEEN} - ${STRINGS.MAY} ${STRINGS.TWO_THOHUSAND_SEVENTEEN}`}</em></p>
          <p>
            {`${STRINGS.BLUE_SPHERE_DESCRIPTION}`}
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>{`${STRINGS.AUTODEALERS}`}</h3>
          <p className="info">{`${STRINGS.INTERN}`}<span>•</span><em className="date">{`${STRINGS.FEBRUARY} ${STRINGS.TWO_THOUSAND_THIRTEEN} - ${STRINGS.JULY} ${STRINGS.TWO_THOUSAND_THIRTEEN}`}</em></p>
          <p>
            {`${STRINGS.AUTODEALERS_DESCRIPTION}`}
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills
----------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <div className="bars">
        <ul className="skills">
          <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
          <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
          <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
          <li><span className="bar-expand css" /><em>CSS</em></li>
          <li><span className="bar-expand html5" /><em>HTML5</em></li>
          <li><span className="bar-expand jquery" /><em>jQuery</em></li>
        </ul>
      </div>{/* end skill-bars */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
</section> /* Resume Section End*/

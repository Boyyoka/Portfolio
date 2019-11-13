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
          <p className="info">{STRINGS.FULL_STACK_ENGINEER}<span>•</span> <em className="date">{`${STRINGS.DECEMBER} ${STRINGS.TWO_THOUSAND_EIGHTEEN} - ${STRINGS.AUGUST} ${STRINGS.TWO_THOUSAND_NINETEEN}`}</em></p>
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
      <h1><span>{STRINGS.SKILLS_AND_TOOLS}</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>
        {`${STRINGS.SKILLS_AND_TOOLS_DESCRIPTION}`}
      </p>
      <div className="tools">
        <div className="tool-wrapper">
          <img src ="assets/images/tools/photoshop.png" />
          <em>{`${STRINGS.PHOTOSHOP}`}</em>
        </div>
        <div className="tool-wrapper" style={{marginRight: '3em', marginLeft: '3em'}}>
          <img src ="assets/images/tools/docker.png" />
          <em>{`${STRINGS.DOCKER}`}</em>
        </div>
        <div className="tool-wrapper">
          <img src ="assets/images/tools/git.png" />
          <em>{`${STRINGS.GIT}`}</em>
        </div>
        <div className="tool-wrapper">
          <img src ="assets/images/tools/azure.png" />
          <em>{`${STRINGS.AZURE}`}</em>
        </div>
        <div className="tool-wrapper" style={{marginRight: '3em'}}>
          <img src ="assets/images/tools/blender.png" />
          <em>{`${STRINGS.BLENDER}`}</em>
        </div>
        <div className="tool-wrapper">
          <img src ="assets/images/tools/slack.png" />
          <em>{`${STRINGS.SLACK}`}</em>
        </div>
      </div> {/* tools end */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
</section> /* Resume Section End*/


import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Card.scss'
import { ProjectItem } from '../ProjectTypes';

interface CardProps {
    cardInfo: ProjectItem;
    onClick: () => void;
}

const shorten = (s: string) => {
  return s.length > 80 ? s.substring(0, 70) + "..." : s;
}

const Card : React.FC<CardProps> = ({cardInfo, onClick}) => {

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return (
     <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: .5, ease: 'easeOut' }}
        ref={ref}
        className="magic"
    >
      <div className="card-container" onClick={onClick}>
          <div className='card-image-container'>
              <img src={cardInfo.thumbnail} alt='genser' className='card-image'/>
          </div>
          <div className='card-info'>
              <h2>{cardInfo.title}</h2>
              <p>{shorten(cardInfo.description)}</p>
          </div>
      </div>
    </motion.div>
  );
}

export default Card;
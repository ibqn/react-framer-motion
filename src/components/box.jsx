import { motion } from 'framer-motion'
import styled from 'styled-components'

const box = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
}

const transition = {
  duration: 2,
  ease: 'easeInOut',
  times: [0, 0.2, 0.5, 0.8, 1],
  // loop: Infinity,
  // repeatDelay: 1
}

const Container = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
`

export const Box = () => <Container animate={box} transition={transition} />

export default Box

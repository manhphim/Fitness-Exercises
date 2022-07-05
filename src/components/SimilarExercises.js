import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
        <Typography variant="h3" mb={5}>
            Exercises that target the same <span style={{ color: '#FF2625' }}>muscle</span> group
        </Typography>
        <Stack direction="row" sx={{ p: '2', position: 'relative' }} >
            {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
        </Stack>
        <Typography variant="h3" mb={5}>
            Exercises that target the same <span style={{ color: '#FF2625' }}>equipment</span>
        </Typography>
        <Stack direction="row" sx={{ p: '2', position: 'relative' }} >
            {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
        </Stack>

    </Box>
  )
}

export default SimilarExercises
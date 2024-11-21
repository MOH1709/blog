import { Box, Stack } from '@mui/material';
import type { FC } from 'react';
import CustomButton from '../../Button/CustomButton';

interface HorizontalCardProps {
  id: string;
  title: string;
  img: string;
  desc: string;
  tags: string[];
}

const HorizontalCard: FC<HorizontalCardProps> = (
  props: HorizontalCardProps,
) => {
  const { title, img, desc, tags } = props;

  return (
    <Stack
      gap={2}
      sx={{
        height: 420,
        minWidth: 220,
        maxWidth: 330,
        borderRadius: '16px',
        background: 'white',
        p: 3,
        m: 2,
      }}
    >
      <Box sx={{ fontWeight: 700, fontSize: '20px' }}>
        {title}
      </Box>
      <Stack direction={'row'} gap={1}>
        {tags.map((tag, i) => (
          <CustomButton
            sx={{ fontSize: 14, borderRadius: 10, p: 0 }}
            variant="contained"
            key={`${tag}-${i}`}
          >
            tag
          </CustomButton>
        ))}
      </Stack>
      <Box>
        <img
          style={{
            objectFit: 'contain',
            borderRadius: '10px',
          }}
          src={img}
          alt="blog"
          width={'100%'}
        />
      </Box>
      <Box className="paragraph">{desc}</Box>
      <CustomButton
        variant="contained"
        sx={{ borderRadius: '18px' }}
      >
        READ MORE
      </CustomButton>
    </Stack>
  );
};

export default HorizontalCard;

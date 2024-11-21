import { Box, Stack } from '@mui/material';
import type { FC } from 'react';
import CustomButton from '../../Button/CustomButton';

interface VerticalCardProps {
  id: string;
  title: string;
  img: string;
  desc: string;
  tags: string[];
}

const VerticalCard: FC<VerticalCardProps> = (
  props: VerticalCardProps,
) => {
  const { title, img, desc, tags } = props;

  return (
    <Stack
      gap={2}
      sx={{
        height: 130,
        width: '100%',
        maxWidth: 330,
        borderRadius: '16px',
        background: 'white',
        p: 1.4,
        m: 2,
      }}
      direction={'row'}
    >
      <Box>
        <img
          style={{
            objectFit: 'contain',
            borderRadius: '10px',
          }}
          loading="lazy"
          src={img}
          alt="blog"
          width={'100%'}
        />
      </Box>
      <Stack gap={1}>
        <Box
          className="title-paragraph"
          sx={{ fontSize: 14 }}
        >
          {title}
        </Box>
        <Stack direction={'row'} gap={1}>
          {tags.map((tag, i) => (
            <CustomButton
              sx={{ fontSize: 10, borderRadius: 10, p: 0 }}
              variant="contained"
              key={`${tag}-${i}`}
            >
              tag
            </CustomButton>
          ))}
        </Stack>

        <Box className="paragraph" sx={{ fontSize: 12 }}>
          {desc}
        </Box>
      </Stack>
    </Stack>
  );
};

export default VerticalCard;

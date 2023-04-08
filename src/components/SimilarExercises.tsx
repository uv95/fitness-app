import { IExercise } from '@/utils/types';
import {
  Box,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Slider from './Slider';

type Props = {
  exercisesFiltered: {
    byBodyPart: IExercise[];
    byTarget: IExercise[];
    byEquipment: IExercise[];
  };
};

const SimilarExercises = ({ exercisesFiltered }: Props) => {
  return (
    <Box w="90%" maxW="1210px" m="20px auto 20px auto">
      <Stack alignItems="center">
        <Heading fontSize={{ sm: '20px', md: '23px', lg: '30px' }}>
          Similar Exercises
        </Heading>
        <Tabs colorScheme={'gray'} variant="soft-rounded" w="100%">
          <TabList
            fontSize={{ base: '9px', sm: '15px' }}
            justifyContent="center"
            mt="15px"
          >
            <Tab
              fontSize="inherit"
              p={{ base: '0 8px', sm: '0 16px' }}
              h={{ base: '20px', sm: '30px' }}
            >
              Body Part
            </Tab>
            <Tab
              fontSize="inherit"
              p={{ base: '0 8px', sm: '0 16px' }}
              h={{ base: '20px', sm: '30px' }}
            >
              Target Muscle
            </Tab>
            <Tab
              fontSize="inherit"
              p={{ base: '0 8px', sm: '0 16px' }}
              h={{ base: '20px', sm: '30px' }}
            >
              Equipment
            </Tab>
          </TabList>
          <TabPanels mt="15px">
            <TabPanel p="0">
              <Slider exercises={exercisesFiltered?.byBodyPart} />
            </TabPanel>
            <TabPanel p="0">
              <Slider exercises={exercisesFiltered?.byTarget} />
            </TabPanel>
            <TabPanel p="0">
              <Slider exercises={exercisesFiltered?.byEquipment} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default SimilarExercises;

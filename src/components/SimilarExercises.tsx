import { IExercise } from '@/utils/types';
import {
  Box,
  Button,
  Flex,
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
    <Box mt="30px">
      <Stack alignItems="center">
        <Heading size="lg">Similar Exercises</Heading>
        <Tabs variant="soft-rounded">
          <TabList justifyContent="center" mt="15px">
            <Tab>Body Part</Tab>
            <Tab>Target Muscle</Tab>
            <Tab>Equipment</Tab>
          </TabList>
          <TabPanels mt="15px">
            <TabPanel>
              <Slider exercises={exercisesFiltered?.byBodyPart} />
            </TabPanel>
            <TabPanel>
              <Slider exercises={exercisesFiltered?.byTarget} />
            </TabPanel>
            <TabPanel>
              <Slider exercises={exercisesFiltered?.byEquipment} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default SimilarExercises;

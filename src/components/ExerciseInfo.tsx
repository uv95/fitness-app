import { makeCamelCase } from '@/utils/makeCamelCase';
import { IExercise } from '@/utils/types';
import {
  Badge,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/ExerciseInfo.module.css';

type Props = { exercise: IExercise };

const ExerciseInfo = ({ exercise }: Props) => {
  return (
    <Card
      boxShadow="1px 1px 7px  rgb(0,0,0,0.12)"
      minW="240px"
      w="90%"
      maxW="1200px"
      margin="0 auto 30px auto"
      h="fit-content"
    >
      <CardBody>
        <Flex
          justifyContent="space-between"
          h="100%"
          flexDirection={{ md: 'row', base: 'column' }}
          alignItems={{ md: 'stretch', base: 'center' }}
        >
          <div className={styles.image}>
            <Image
              src={exercise.gifUrl}
              alt="exercise gif"
              width={320}
              height={320}
            />
          </div>

          <Stack gap="5px" maxW={{ base: '100%', md: '70%' }}>
            <Heading fontSize={{ sm: '23px', lg: '30px' }}>
              {makeCamelCase(exercise.name)}
            </Heading>
            <Text fontSize={{ lg: '20px', base: '15px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              voluptatem non adipisci deserunt reiciendis unde eveniet, beatae
              asperiores autem nulla accusantium, nesciunt fugiat quidem
              temporibus suscipit, maiores eius id voluptas.
            </Text>
            <Wrap
              gap="15px"
              mt={{ base: '15px !important', md: 'auto !important' }}
            >
              <Badge
                borderRadius="20px"
                p="2px 8px"
                fontSize={{ lg: '15px', base: '9px' }}
                colorScheme="yellow"
              >
                {makeCamelCase(exercise.bodyPart)}
              </Badge>
              <Badge
                borderRadius="20px"
                p="2px 8px"
                fontSize={{ lg: '15px', base: '9px' }}
                colorScheme="pink"
              >
                {makeCamelCase(exercise.target)}
              </Badge>
              <Badge
                borderRadius="20px"
                p="2px 8px"
                fontSize={{ lg: '15px', base: '9px' }}
                colorScheme="blue"
              >
                {makeCamelCase(exercise.equipment)}
              </Badge>
            </Wrap>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ExerciseInfo;

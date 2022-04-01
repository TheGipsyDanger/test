import * as React from 'react'

import { Wrapped, Image, Text } from '~/components/Basics'

import { useModal } from '~/context'

export const More = () => {
  const { openModal } = useModal()
  return (
    <Wrapped onPress={() => openModal('TestModal')}>
      <Wrapped
        mx={3}
        mb={2}
        bg="moldals"
        shadow="list"
        testID={'List:Menu.More'}
        flexDirection="row"
        borderRadius="fullImageList">
        <Image
          borderRadius="fullImageList"
          width={107}
          height={107}
          uri="https://cdn.abcdoabc.com.br/outback_d2ad7be8.jpg"
        />
        <Wrapped px={2} justifyContent="center">
          <Text variant="outback:h2" mb={1}>{`Aniversário no Outback`}</Text>
          <Text variant="outback:body">{`Conheça os benefícios do\naniversariante do dia.`}</Text>
        </Wrapped>
      </Wrapped>
    </Wrapped>
  )
}

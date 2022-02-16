import type {PageBlocks} from '../../.tina/__generated__/types'
import { FeaturesBlock, FlyingBlock, HeroBlock, PricingBlock, FaqBlock, ContentBlock } from './'

export const Blocks = ({ blocks }: {blocks:PageBlocks}) => {
  return blocks.map((block, index) => {
    switch (block.__typename) {
      case 'PageBlocksFeatures':
        return <FeaturesBlock data={block} index={index} />
      case 'PageBlocksFlying':
        return <FlyingBlock data={block} index={index} />
      case 'PageBlocksHero':
        return <HeroBlock data={block} index={index} />
      case 'PageBlocksPricing':
        return <PricingBlock data={block} index={index} />
      case 'PageBlocksFaq':
        return <FaqBlock data={block} index={index} />
      case 'PageBlocksContent':
        return <ContentBlock data={block} index={index} />
      default:
        return null
    }
  })
}

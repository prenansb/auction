interface AuctionProps {
  id: string;
  title: string;
  description: string;
  startBid: number;
  currentBid: number;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export class Auction {
  props: AuctionProps;

  constructor(props: AuctionProps) {
    this.props = {
      ...props,
    };
  }
}

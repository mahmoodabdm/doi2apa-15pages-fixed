import { NextRequest, NextResponse } from 'next/server';

const MY_WALLET = "TUQrUsLTBQG9eXZA8HHLYdjWcMMNmh8tBx";
const USDT_CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

export async function POST(req: NextRequest) {
  try {
    const { txid } = await req.json();
    if (!txid || txid.length < 20) {
      return NextResponse.json({ valid: false, reason: 'Invalid TXID' }, { status: 400 });
    }

    const r = await fetch(`https://apilist.tronscanapi.com/api/transaction-info?hash=${txid.trim()}`, {
      headers: { 'User-Agent': 'DOI2APA-PRO/4.0' },
      cache: 'no-store'
    });
    const data = await r.json();

    // data.trc20TransferInfo contains array of TRC20 transfers
    const transfers = data.trc20TransferInfo || [];
    for (const t of transfers) {
      const toAddr = t.to_address || t.toAddress;
      const contract = t.contract_address || t.contractAddress;
      const amountStr = t.amount_str || t.amountStr || t.amount;
      if (toAddr === MY_WALLET && contract === USDT_CONTRACT) {
        const amount = parseInt(amountStr) / 1e6;
        if (amount >= 2.9) {
          return NextResponse.json({ valid: true, amount, from: t.from_address, txid });
        }
      }
    }

    return NextResponse.json({ valid: false, reason: 'No 3 USDT TRC20 found to your wallet', raw: data });
  } catch (e: any) {
    return NextResponse.json({ valid: false, error: e.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Tron verification API ready', wallet: MY_WALLET });
}

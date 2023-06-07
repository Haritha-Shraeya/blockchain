WITH recent_trades AS (
  SELECT DISTINCT address
  FROM trades
  WHERE block_height > 730000
),
address_balances AS (
  SELECT address, SUM(CASE WHEN denom = 'usdc' THEN amount * 0.000001
                           WHEN denom = 'swth' THEN amount * 0.00000005
                           WHEN denom = 'tmz' THEN amount * 0.003
                      END) AS total_balance
  FROM balances
  GROUP BY address
)
SELECT ab.address
FROM address_balances ab
JOIN recent_trades rt ON ab.address = rt.address
WHERE ab.total_balance >= 500

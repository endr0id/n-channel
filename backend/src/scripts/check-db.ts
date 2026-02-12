import pg from 'pg';
import { env } from '../config/env';

const client = new pg.Client({
  connectionString: env.databaseUrl
});

async function checkConnection() {
  try {
    await client.connect();
    console.log('✅ DB接続成功');

    const result = await client.query('SELECT NOW()');
    console.log(`✅ クエリ成功: ${result.rows[0].now}`);

    await client.end();
    console.log('✅ DB切断成功');
    process.exit(0);
  } catch (error) {
    console.error('❌ DB接続失敗:', error);
    process.exit(1);
  }
}

checkConnection();

import { describe, it, expect } from 'vitest';
import { verifyCredentials, findUserByEmail } from '../repositories';

describe('auth/repositories', () => {
  describe('verifyCredentials', () => {
    it('正しい認証情報の場合、ユーザー情報を返す', async () => {
      const user = await verifyCredentials('test@example.com', 'password1234');
      expect(user).toEqual({
        id: 1,
        name: 'test_user'
      });
    });

    it('メールアドレスが間違っている場合、nullを返す', async () => {
      const user = await verifyCredentials('wrong@example.com', 'password1234');
      expect(user).toBeNull();
    });

    it('パスワードが間違っている場合、nullを返す', async () => {
      const user = await verifyCredentials('test@example.com', 'wrongpassword');
      expect(user).toBeNull();
    });

    it('メールアドレスとパスワードの両方が間違っている場合、nullを返す', async () => {
      const user = await verifyCredentials('wrong@example.com', 'wrongpassword');
      expect(user).toBeNull();
    });
  });

  describe('findUserByEmail', () => {
    it('メールアドレスが存在する場合、ユーザー情報を返す', async () => {
      const user = await findUserByEmail('test@example.com');
      expect(user).toEqual({
        id: 1,
        name: 'test_user'
      });
    });

    it('メールアドレスが存在しない場合、nullを返す', async () => {
      const user = await findUserByEmail('nonexistent@example.com');
      expect(user).toBeNull();
    });

    it('空のメールアドレスの場合、nullを返す', async () => {
      const user = await findUserByEmail('');
      expect(user).toBeNull();
    });
  });
});

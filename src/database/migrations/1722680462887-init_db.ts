import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitDb1722680462887 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) NOT NULL UNIQUE, first_name VARCHAR(20) NOT NULL, last_name VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL UNIQUE, password VARCHAR(20) NOT NULL)',
    )

    await queryRunner.query(
      'CREATE TABLE role(id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL UNIQUE)',
    )

    await queryRunner.query(
      'CREATE TABLE user_roles(id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), role_id INTEGER RREFERENCES role(id))',
    )

    await queryRunner.query(
      'CREATE TABLE blog(id SERIAL PRIMARY KEY, name VARCHAR(20) UNIQUE NOT NULL, body VARCHAR(500) NOT NULL , created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE user_roles')

    await queryRunner.query('DROP TABLE roles')

    await queryRunner.query('DROP TABLE users')

    await queryRunner.query('DROP TABLE blog')
  }
}

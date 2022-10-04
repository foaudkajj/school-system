const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class studentTable20221004083100 {

    async up(queryRunner) {
        await queryRunner.query(
          `
            create table \`student\` (
              \`id\` char(36) not null,
              \`name\` varchar(100) not null,
              \`last_name\` varchar(100) null,
              \`phone_number\` char(15) not null,
              primary key(\`id\`)
          ) Engine=InnoDB;
            `,
        );
      }
    
      async down(queryRunner) {
        await queryRunner.query(
          `drop table \`student\`;`,
        );
      }

}

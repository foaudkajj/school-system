const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class studentTable20221008232500 {

    async up(queryRunner) {
        await queryRunner.query(
          `
            create table \`student\` (
              \`id\` char(36) not null,
              \`name\` varchar(50) not null,
              \`surname\` varchar(50) not null,
              \`age\` integer null,
              \`father_name\` varchar(100) null,
              \`father_number\` varchar(20) null,
              \`mother_name\` varchar(100) null,
              \`mother_number\` varchar(20) null,
              \`gsm\` varchar(20) null,
              \`identity_no\` varchar(20) null,
              \`address\` varchar(1000) null,
              constraint \`pk_student\` primary key (\`id\`)
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

const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class countryTable20221017153125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`country\` (
                \`id\` char(36) not null,
                \`name\` varchar(50) not null,
                constraint \`pk_country\` primary key (\`id\`)
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`country\`;`,
        );
    }

}

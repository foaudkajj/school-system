const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class genericListTable20221016160825 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`generic_list\` (
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`description\` varchar(1000) not null,
                constraint \`pk_generic_list\` primary key (\`id\`)
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`generic_list\`;`,
        );
    }

}

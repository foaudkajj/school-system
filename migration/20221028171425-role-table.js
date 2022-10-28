const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class RoleTable20221028171425 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`role\`(
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`description\` varchar(1000) null,
                constraint \`pk_role\` primary key (\`id\`)
            ) Engine = InnoDB;`
        )
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`role\`;`
        )
    }

}

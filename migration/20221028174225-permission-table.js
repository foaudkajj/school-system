const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class permissionTable20221028174225 {

    async up(queryRunner) {
        await queryRunner.query(
            `create table \`permission\`(
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`description\` varchar(1000) null,
                constraint \`pk_permission\` primary key (\`id\`)
            ) Engine = InnoDB;`
        )
        
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`permission\`;`
        )
    }

}
